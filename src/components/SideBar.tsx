import * as React from "react";
import { SideBarRibbon } from "./SideBarRibbon";
import { ChatBox } from "./ChatBox";

export interface ISideBarProps{

};

export class SideBar extends React.Component<ISideBarProps, {}> {
    render(){/*
        return <div className="container-fluid h-100">
            <div className="row justify-content-center bg-info flex-grow-1">
                <div className="col m-0 p-0">
                    <SideBarRibbon isSignedIn={false}/>
                </div>
            </div>
            <div className="row justify-content-center bg-danger">
                <div className="col m-0 p-0">
                    <ChatBox/>
                </div>
            </div>
        </div>
*/
        return <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
            <div className="col-12">
                <div className="h-100 d-flex flex-column">
                    <div className="row justify-content-center">
                        <div className="w-100">
                            <SideBarRibbon isSignedIn={false}/>
                        </div>
                    </div>
                    <div className="row justify-content-center flex-grow-1">
                        <div className="w-100">
                            <ChatBox/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    }
}