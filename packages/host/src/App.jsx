import { lazy } from "react";
import { Tabs, Item, Header, Content } from "@workleap/orbiter-ui";

const Remote1HelloWorld = lazy(() => import("remote1/HelloWorld.jsx"));
// const Remote2HelloWorld = lazy(() => import("remote2/HelloWorld.jsx"));

export function App() {
    return (
        <>
            <div style={{ border: "2px solid blue" }}>
                <div>Hello from host application</div>
                <br />
                <div>
                    Here's a tabs component from the host application
                    <Tabs aria-label="Planets">
                        <Item key="mars">
                            <Header>Mars</Header>
                            <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                        </Item>
                        <Item key="jupiter">
                            <Header>Jupiter</Header>
                            <Content>
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System.
                            </Content>
                        </Item>
                        <Item key="venus">
                            <Header>Venus</Header>
                            <Content>
                                Venus is the second planet from the Sun. It is named after the Roman goddess of love and
                                beauty.
                            </Content>
                        </Item>
                    </Tabs>
                </div>
            </div>
            <br /><br />
            <Remote1HelloWorld />
        </>
    );
}