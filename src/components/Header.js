import React, {useState} from 'react'
import Image1 from './images/hotel-thailand3.jpg';
import Image2 from './images/Olivia.jpg';
import Image3 from './images/Ksenia.jpg';
import Image4 from './images/Jone.jpg';
import Image5 from './images/Mathew.jpg';
/* import './Main.css';  */
import './Header.scss'; 

const UseStateMain = () => {
    const[like, setLike] = useState(665)

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
    /* const fourthImage = <img src={Image5} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} /> */
    
    /* const newComments = {id: 4, time: "(1 sec ago)", img: fourthImage, name: "Mathew", comment: "Ooo how is it possible, live like in the movie..." } */

    const data = [
        {id: 1, time: "(2 days ago)", img:firstImage, name: "Olivia", comment: "It's absolutely gorgeous view, i love this, how can i book this hotel now?"},
        {id: 2, time: "(3 days ago)", img:secondImage, name: "Ksenia", comment: "Great experience! I really love food here. I stayed at sunset villa. It’s a big and nice house. The bathroom,dressing room and toilet are not so convenient as they separated and not connected. The staffs are so nice and very helpful especially all the staffs at the beach."},
        {id: 3, time: "(5 days ago)", img:thirdImage, name: "Jone", comment: "Unique experience here I would say from fresh fruits, fresh juices, free & good sport activities, kayaking in mangrove, spa & highlight afternoon “Tree Pod”. If you wanna enjoy vacation in remote area, private beach, do water sports (everything is free), of course with higher price you can choose to be here. "},
    ]
    


    function newOne(e) {
        e.preventDefault(e);
        
        let div1 = document.createElement('div')
        div1.id = "closeMyComm"         
        let newDiv = document.getElementById('new-comment')
        newDiv.appendChild(div1);
        let div2 = document.createElement('div')
        div1.appendChild(div2)
        let img = document.createElement('img')
        img.src = "https://stuki-druki.com/biofoto3/matthew-mcconaughey-01.jpg"
        div2.appendChild(img)
        let h5 = document.createElement('h5')
        h5.innerHTML = "Matthew (a few seconds ago)" 
        let i = document.createElement('i')
        i.className = 'fas fa-times'
        i.onclick = function(){div1.className = "hideMyComment"}
        h5.appendChild(i)
        div2.appendChild(h5)
        let h4 = document.createElement('h4')
        div1.appendChild(h4)
        let textArea = document.getElementById('textArea')
        if(textArea.value === ""){
            h4.innerHTML = "Random comment"
        } else {
            h4.innerHTML = textArea.value
        }
        textArea.value = "";
        
        //you can append smth before div, using insertBefore() methods, but it's more complicated
        //because even if you have child before, you print each time before this child
        // but you need -> any child needs appendent before this new append child! and so on
        //you can add eventListener with buttons, when you push 'enter' -> comments is published auto 

    }

    const[comm, setComm] = useState(data);
    
    const closeComment = (id) => {
        let removeComment = comm.filter((pers) => pers.id !== id)
        console.log(comm)
        setComm(removeComment)

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

    const addComment = (e) => {
        e.preventDefault()       
    }
          
    return (
        
        <header>
            <h2>Soneva Kiri Thailand</h2>
            <img className = "mainImage" src={Image1} alt="" /* height='400px' width='620px' */ />
            <div className='likes'>
                <button className='btn' onClick={clickHandler}><i className="fas fa-heart">COOL</i></button>
                <p>{like}</p>                
                {/* <button className='btn2' onClick={showUp}> Comments <i className="fas fa-comment"></i> </button> */}       
                <button className='btn2' onClick={clickHand}> Comments <i className="fas fa-comment"></i> </button>       
            </div>
            <form action="#" id="comments" style={{display:'none'}} onSubmit={addComment}>
                <div className="myComment">
                    <img src={Image5} alt="" height='50px' width='40px' style ={{borderRadius:'20%'}} />
                    <label htmlFor="comment"></label>
                    <textarea id = "textArea" cols="88" rows="5" placeholder='Add a public comment...'></textarea><br />                    
               </div>
               
               <div className='btn-comments'>
                   <button onClick={clickHand}>Cancel</button>
                   <button onClick={newOne}>Comment</button>
               </div>   
               <div id="new-comment"></div>            
               <div className="oldComments">{comm.map((pers) => {
                   const {id, img, name, time, comment} = pers
                   return <div className="oldOld" key={id}>
                            <div>
                                <h4 style={{marginRight:'0.5em'}}>{img} </h4>
                                <h5>{name} {time} <i id="closeCom" onClick={() => closeComment(id)} className={'fas fa-times'}></i></h5>
                            </div>
                            <h4 className="oldComment">{comment}</h4>
                        </div>
               })}                   
               </div>             
            </form>                   
                                                         
        </header>
    )
}

export default UseStateMain


