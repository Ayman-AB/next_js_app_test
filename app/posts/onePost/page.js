import Link from 'next/link';

async function fetchTodo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        
    });
    return res.json();
  }
  
  export default async function Page() {
    const todo = await fetchTodo();
    console.log(todo);
  
    return (
      todo.map((to) =>{
        return(
          <div key={to.id} className='container'>
          <Link  href={`./onePost/${to.id}`}>
            <div   style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
            <div  style={{
                backgroundColor: "white",
                padding:"15px",
                margin: "15px",
                color: "black",
                width: "70%",
            }}>
            <h2>Todo Title:<strong> {to.title}</strong></h2>
          </div>
          </div>
          </Link>
          </div>
        )
      })
    );
  }