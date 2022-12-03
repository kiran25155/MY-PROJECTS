const Output = (props) => {
    return (
        <>
            <div className="text-center" style={{marginTop:'50px' ,marginBottom: '80px', border: '1px solid green', marginLeft:'400px', marginRight:'400px'}}>
                <h4>Form Details</h4>
                <h4>{ props.inputs }</h4>
            </div>
        </>
    )
}

export default Output;