import { Tabs, Item, Header, Content } from "@workleap/orbiter-ui";

export default function HelloWorld() {
    return (
        <div style={{ border: "2px solid red" }}>
            <div>Hello from remote-1</div>
            <br />
            <div>
                Here's a tabs component from remote-1
                <Tabs aria-label="Tesla car models">
                    <Item key="model-s">
                        <Header>Model S</Header>
                        <Content>Model S</Content>
                    </Item>
                    <Item key="model-3">
                        <Header>Model 3</Header>
                        <Content>Model 3</Content>
                    </Item>
                    <Item key="model-x">
                        <Header>Model X</Header>
                        <Content>Model X</Content>
                    </Item>
                </Tabs>
            </div>
        </div>
    )
}