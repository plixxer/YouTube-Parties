import * as React from "react";
export interface IChatBoxProps{

}
export class ChatBox extends React.Component<IChatBoxProps, {}> {
    render(){
        return <div className="container">
            <div className="row">
                <div className="col">
                    <div className="container bg-white">
                        {[1,2,3].map((value, index)=>{
                            return <div className="row" key={index}>
                                <div className="col">
                                    MESSAGE {value}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
}