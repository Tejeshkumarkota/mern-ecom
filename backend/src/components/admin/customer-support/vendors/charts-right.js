import { Paperclip, PhoneCall , Send} from "react-feather";

export function ChatsRight(prop) {
    const index = prop.filterData - 1;
    const chatDate = prop.date[index];
    //console.log(chatDate.massage.length)
    return (
        <>
            <div className="chat-user-right">
                <div className="row g-0 align-items-center user-visible chat-header border-bottom p-3">
                    <div className="col-auto">
                        <img src={chatDate.img} alt="profile Img" width={50} height={50} className="rounded-circle"/>
                    </div>
                    <div className="col text-black-50 ms-2">
                        <p className="font-16">{chatDate.name}</p>
                    </div>
                    <div className="col-auto text-end">
                        <span className="bg-white p-2 rounded-2"><PhoneCall /></span>
                    </div>
                </div> 
                <div className="chart-view">
                { chatDate.massage.length > 0 ?
                    <>
                    { chatDate.massage.map((chat, i) => (
                        <div key={i}>
                        { chat.type === 'you' ?
                            <div className="d-flex mw-75 mb-3">
                                <div>
                                    <img src={chatDate.img} alt="profile Img" width={35} height={35} className="rounded-circle"/>
                                </div>
                                 
                                   
                                    
                                    <div className="bubble">
                          <p>  Tina Joshi    <span>{chat.time}</span>
                            <span className="d-block">{chat.text}  </span> </p>
                        </div>
                                
                            </div>
                            :
                            <div className="d-flex mw-75 justify-content-end ms-auto mb-3">
                                <div className="recent-data">
                                    <span className="font-12 chat-time">{chat.time}</span>
                                    <p className="mb-0">{chat.text}</p>
                                </div>
                            </div>
                        }
                        </div>
                    )) } 
                    </> : ''
                }
                
                </div>
                <div className="footer-chat d-flex">
                    <div className="footer-input">
                        <input type="text" placeholder="Type a new message" className="form-control" />
                        <div className="attach"><Paperclip /> </div>
                    </div>
                    <div className="send-icon">
                    <button className='btn'> <Send /> </button>
                    </div>
                </div>
            </div>
        </>
    );
}