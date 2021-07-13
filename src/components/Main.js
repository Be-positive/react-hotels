import React, {useEffect} from 'react'
import Image1 from './images/hotel-thailand.jpg';
import Image2 from './images/Olivia.jpg';
import Image3 from './images/Ksenia.jpg';
import Image4 from './images/Jone.jpg';
import Image5 from './images/Mathew.jpg';
/* import './Main.css';  */
import './Main.scss'; 

const Main = () => {
    const[like, setLike] = React.useState(665)

    const clickHandler = () => {
        setLike((prev)=> prev + 1)        
    }    

    const showUp  = () => {                
        let comment = document.getElementById('comments')
        comment.style.display="flex"
    }  
    const hide  = () => {                       
        let comment = document.getElementById('comments')
        comment.style.display="none"
        let textArea = document.getElementById('textArea')
        textArea.value = ""
    }   
      
    const clickHand = (e) => {
        e.preventDefault();                
        let comment = document.getElementById('comments')
        if(comment.style.display === "none"){
            return showUp()
        } else {
            return hide()
        }
    }
    
    const firstImage = <img src={Image2} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
    const secondImage = <img src={Image3} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
    const thirdImage = <img src={Image4} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
    const fourthImage = <img src={Image5} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
    
    /* const newComments = {id: 4, time: "(1 sec ago)", img: fourthImage, name: "Mathew", comment: "Ooo how is it possible, live like in the movie..." } */

    const data = [
        {id: 1, time: "(2 days ago)", img:firstImage, name: "Olivia", comment: "It's absolutely gorgeous view, i love this, how can i book this hotel now?"},
        {id: 2, time: "(3 days ago)", img:secondImage, name: "Ksenia", comment: "We were in this hotel last summer, recommended 100%!"},
        {id: 3, time: "(5 days ago)", img:thirdImage, name: "Jone", comment: "I love Thailand, i always meet there beautiful peoples with happy mood."},
    ]
    /* const[comment, setComment] = React.useState(data) */

    function newOne(e) {
        e.preventDefault(e);
        
        let div1 = document.createElement('div')         
        let newDiv = document.getElementById('new-comment')
        newDiv.appendChild(div1);
        let div2 = document.createElement('div')
        div1.appendChild(div2)
        let img = document.createElement('img')
        img.src = "https://stuki-druki.com/biofoto3/matthew-mcconaughey-01.jpg"
        div2.appendChild(img)
        let h5 = document.createElement('h5')
        h5.innerHTML = "Mathew (a few seconds ago)"
        div2.appendChild(h5)
        let h4 = document.createElement('h4')
        div1.appendChild(h4)
        let textArea = document.getElementById('textArea')
        if(textArea.value === ""){
            h4.innerHTML = "Random comment"
        } else {
            h4.innerHTML = textArea.value
        }       
        
        //you can append smth before div, using insertBefore() methods, but it's more complicated
        //because even if you have child before, you print each time before this child
        // but you need -> any child needs appendent before this new append child! and so on
        //you can add eventListener with buttons, when you push 'enter' -> comments is published auto 

    }
    
/*     function newOne(e) {
        e.preventDefault(e);
        data.unshift(newComments);        
        return data;
    } */
            
/*     const addNewComment = function(){
        //e.preventDefault();
        if(data[3] === undefined){
            return data[3] = newComments; 
        } else {return data[4] = newComments}            
    } */
          
    return (
        
        <main>
            <h2>Hotel in Thailand </h2>
            <img src={Image1} alt="" height='400px' width='620px' />
            <div className='likes'>
                <button className='btn' onClick={clickHandler}><i className="fas fa-heart">COOL</i></button>
                <p>{like}</p>                
                {/* <button className='btn2' onClick={showUp}> Comments <i className="fas fa-comment"></i> </button> */}       
                <button className='btn2' onClick={clickHand}> Comments <i className="fas fa-comment"></i> </button>       
            </div>
            <form action="#" id="comments" style={{display:'none'}}>
                <div className="myComment">
                    <img src={Image5} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
                    <label htmlFor="comment"></label>
                    <textarea id = "textArea" cols="77" rows="5" placeholder='Add a public comment...'></textarea><br />                    
               </div>
               
               <div className='btn-comments'>
                   <button onClick={clickHand}>Cancel</button>
                   <button onClick={newOne}>Comment</button>
               </div>   
               <div id="new-comment"></div>            
               <div className="oldComments">{data.map((data) => {  
                                   
                   return <div className="oldOld" key={data.id}>
                            <div>
                                <h4 style={{marginRight:'0.5em'}}>{data.img} </h4>
                                <h5>{data.name} {data.time}</h5>                                
                            </div>
                            <h4 className="oldComment">{data.comment}</h4>

                          </div>
               })}                   
               </div>             
            </form>                   
                                                         
        </main>
    )
}

export default Main
