import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  /* const [notes, setNotes] = useState([
     {
       title: "test title 1",
       description: "test description"
     },
     {
       title: "test title 2",
       description: "test description"
     },
     {
       title: "test title 3",
       description: "test description"
     },
     {
       title: "test title 4",
       description: "test description"
     },
   ])  */

  const [notes, setNotes] = useState([])

  console.log("Hello Integration")

  // useEffect( () => {

  // },[])

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        // console.log(res)
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])


  function submitHandler(e){
    e.preventDefault()

    const {title , description} = e.target.elements

    console.log(title.value,description.value)

    axios.post("http://localhost:3000/api/notes",{
      title: title.value,
      description: description.value
    })
    .then(res => {
      console.log(res.data)

      fetchNotes()
    })

  }

  function handleDeleteNote(noteId){
    // console.log(noteId)
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then((res) => {
      console.log(res.data)
      fetchNotes()
    })
  }



  return (
    <>

      <form className='note-create-form'  onSubmit={submitHandler}>
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create Note</button>
      </form>

      <div className='notes'>
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => {
                handleDeleteNote(note._id)
              }}>Delete</button>
            </div>
          })
        }
      </div>

    </>
  )
}

export default App