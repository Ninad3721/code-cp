import supabase from '@/lib/supabase'
import path from 'path'
import fs from 'fs'

type problemDetailsType = {
  problem_name: String
  function_name: String
  input_fields: Array<string>
  output_field: String
}

export default async function generateJavaBoilerPlate(
  problemDetails: problemDetailsType
) {
  let inputString = ''
  if (problemDetails.input_fields.length === 1) {
    inputString = problemDetails.input_fields[0]
  } else {
    problemDetails.input_fields.map((input: string, index: number) => {
      if (index === problemDetails.input_fields.length - 1) {
        inputString = inputString + input
        return
      } else {
        inputString = inputString + input + ','
      }
    })
  }
  let boilerPlate = `
  public ${problemDetails.output_field} ${problemDetails.function_name} (${inputString}) {
    // Write your code here 
  }`

  //generating a temp file
  console.log()
  fs.writeFile(__dirname + '/tempfile.java', boilerPlate, (err) => {
    if (err) {
      console.error('Error writing to temporary file:', err)
      return
    }
  })
  //writing the boilerplate to the temp file

  //   await fs.writeFile(tempfileName, boilerPlate, (err) => {
  //     if (err) {
  //       console.error('Error writing to temporary file:', err)
  //       return
  //     }
  //   })

  //reading file contents
  const fileContents = fs.readFileSync('./tempfile.java')
  console.log('File contents : ' + fileContents)

  //upload to supabase bucket
  const { data, error } = await supabase.storage
    .from(`problems-bucket/${problemDetails.function_name}/boilerplate`)
    .upload('./tempfile.java', fileContents)
  if (error) {
    console.log('Upladoing error : ' + error.message)
  }

  console.log(data)
  return boilerPlate
}
