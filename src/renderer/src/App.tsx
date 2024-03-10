import { useRef } from "react"
import { Content, RootLayout, Sidebar , DraggleTopBar, NotePreviewList, MarkdownEditor, FloatNoteTitle } from "./components"
import { ActionButtonsRow } from "./components/ActionButtonRow"

const App = () => {

  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0,0)
  }
  

  return (
    <>
    <DraggleTopBar/>
      <RootLayout>
        <Sidebar className="mt-7 p-2  ">
          <ActionButtonsRow className="flex justify-between mt-1"/>
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll}/>
        </Sidebar>
        <Content ref={contentContainerRef}className="border-l bg-zinc-900/50 border-l-white/20  ">
          <FloatNoteTitle className="pt-2"/>
          <MarkdownEditor/>
        </Content>
      </RootLayout>
    
    </>
  )
}

export default App
