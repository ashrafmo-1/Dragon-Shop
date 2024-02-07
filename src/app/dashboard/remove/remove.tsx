"use client"
const Remove = (props: any) => {

  function remove_item(id: any) {
    try {
      fetch(`http://127.0.0.1:8000/api/user/delete/${id}`, {
        method: 'DELETE',
      }).then((respone) => {
        if(respone.status === 200) {
          alert('white 5 seconds and relod page to remove item')
        }
      })
    }catch{
      console.error('error deleting');
    }
  }

  return (
    <button className='btn btn-outline-danger fs-5 py-1 px-2' onClick={() => remove_item(props.id)} >Delete</button>
  )
}

export default Remove;