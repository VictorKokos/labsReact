

let withNotesHoc = (Comp1, Comp2) =>
{
    return (props) => {
        
        if(props.Laba4.doubleClickDay)
        {
        return (<div>
        
             <Comp1 {...props }  /> <Comp2 {...props}/>
             </div>)
        }
        else
        {
            return (<div>
                <Comp1 {...props }  />
                </div>)
        }
    }
}
export default withNotesHoc