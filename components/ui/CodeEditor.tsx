'use client'
import Editor from '@monaco-editor/react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import exp from 'constants'

interface CodeEditorProps {
  language: string
  handleCodeSubmission: (data: string) => void
}
const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  handleCodeSubmission,
}) => {
  console.log(language)
  const editorRef = useRef<Editor | null>(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  function handleSubmit() {
    if (!editorRef.current) {
      alert('Editor not initialized')
    } else {
      const code = editorRef.current.getValue()

      handleCodeSubmission(code)
    }
  }

  return (
    <div>
      <>
        <Editor
          height="60vh"
          defaultValue={`public class Solution {
    public int solution(String input) {
        // Write your logic here, where input is  input test case 
        return 0;
    }
}`}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          language="cpp"
        />
        <div className="mt-2">
          <Button onClick={handleSubmit} variant="default">
            Submit code
          </Button>
        </div>
      </>
    </div>
  )
}

export default CodeEditor
