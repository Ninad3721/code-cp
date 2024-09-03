import { spawn } from 'child_process'
import { createWriteStream } from 'fs'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  console.log(body)
  const tempfile = createWriteStream('tempfile.txt')
  tempfile.write(body.code)
  tempfile.end()

  try {
    const docker = spawn('docker', ['run', '--rm', 'ninad3721/leetcode-clone'])
    let stdout = ''
    let stderr = ''

    docker.stdout.on('data', (data) => {
      stdout += data.toString()
    })

    docker.stderr.on('data', (data) => {
      stderr += data.toString()
    })

    docker.on('close', (code) => {
      if (code == 0) {
        const [memory, time] = stderr.split('\n')
        return NextResponse.json({ stdout, stderr, memory, time })
      } else {
        return NextResponse.json({ stderr })
      }
    })
  } catch (error) {
    console.log(error) 
  }

  return NextResponse.json('Executed')
}
