
function AdminAddItem(props) {

    return(
        <form onSubmit={props.submitHandller} ref={props.formRef}>
            <input type="text" placeholder='IMG' />
            <input type="text" placeholder='Model' />
            <input type="text" placeholder='Country' />
            <input type="number" placeholder='Price' />
            <button>Add</button>
        </form>
    )
}

export default AdminAddItem