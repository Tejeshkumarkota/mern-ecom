import { useState } from "react";

//const [active, setActive] = useState(0);

export function ChatsLeft(prop) {
    const chartList = prop.date;
    const [active, setActive] = useState(1);

    const Activefunc = (val) => {
        prop.passData(val);
        setActive(val);
    }

    return (
        <>
            {chartList.map((item, i) => (
                <div className={`user-active c-pointer ${active === item.id ? 'active' : ''}`} key={i} onClick={() => Activefunc(`${item.id}`)}>
                    <div className="row align-items-baseline chat-user-left g-3 flex-nowrap">
                        <div className="col-auto m-0 align-self-center">
                            <div className="position-relative figure-img">
                            <img src={item.img} alt="profile Img" width={35} height={35} className="rounded-circle" />
                            <div class="status online"></div>
                            </div>
                        </div>
                        <div className="col mw-cal-111 text-black-50 m-0">
                            <p className="mb-0 text-truncate">{item.name}</p>
                            <span className="text-truncate d-block">{item.lastchart}</span>
                        </div>
                        <div className="col-auto text-end m-0">
                            <span>{item.lasttime}</span>
                        </div>
                    </div>
                </div>
            ))}
             
        </>
    );
}
