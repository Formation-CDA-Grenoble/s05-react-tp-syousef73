import React from "react"

class oeuvre extends components
{



    render(){
    return (
        <div>

          <image {onFocus= changepicture onClick=changepage}> </image>

           <mytext {newtext = lorem ipsum} / >

        </div>
    )
};

const mytext =(props) => {
    console.log(props)
    return React.createElement('p', {Id: 'mytext', class: 'mytext'}, 
        {props.newtext})

}


}


export default  oeuvre;