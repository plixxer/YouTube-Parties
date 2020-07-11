import * as React from "react";
import { YoutubeVideo } from "./YoutubeVideo";
import { SideBar } from "./SideBar";

export interface LayoutProps { }

export interface ILayoutState{
    sideBarOpen: boolean;
}

// 'YLayoutProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Layout extends React.Component<LayoutProps, {}> {
    state: ILayoutState = {sideBarOpen: true};
    contentContainer: HTMLDivElement;
    sideBarContainer: HTMLDivElement;

    sidebarOpen(isSideBarOpen: boolean){
        this.setState({sideBarOpen: isSideBarOpen}, ()=>{
            if(this.state.sideBarOpen){
                this.contentContainer.className = "col-sm-9 col-md-9 col-lg-10 col-xl-10 col-10 h-100 m-0 p-0";
                this.sideBarContainer.className = "col-sm-3 col-md-3 col-lg-2 col-xl-2 col-2 h-100 bg-dark m-0 p-0";
                console.log("sidebar open");
            }else{
                this.contentContainer.className = "col-12 h-100 m-0 p-0";
                this.sideBarContainer.className = "d-none";
                console.log("sidebar closed");
            }
        });
    }

    componentDidMount(){
        this.sidebarOpen(true);
        this.contentContainer.addEventListener('click', ()=>{this.sidebarOpen(!this.state.sideBarOpen);});
    }

    render() {
        return <div className="container-fluid h-100">
            <div className="row h-100">
                <div ref={(el=> this.contentContainer = el)}>
                    <YoutubeVideo src="-nu5g3AiO4U" verticalCenter={this.state.sideBarOpen}/>
                </div>
                <div ref={(el=> this.sideBarContainer = el)}>
                    <SideBar/>
                </div>
            </div>
        </div>
    }
}