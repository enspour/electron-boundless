import { memo, useState } from "react";

import FilledButton from "@components/ui/catalog/FilledButton/FilledButton";
import AsyncFilledButton from "@components/ui/catalog/AsyncFilledButton/AsyncFilledButton";

import Input from "@components/ui/catalog/Input/Input";

import Search from "@components/ui/catalog/Search/Search";

import Select from "@components/ui/catalog/Select/Select";

import Toggle from "@components/ui/catalog/Toggle/Toggle";

import Tabs from "@components/ui/catalog/Tabs/Tabs";

import styles from "./Dev.module.scss";

const ButtonExamples = () => {
    const click = () => {
        console.log("button");
    };

    const asyncClick = async (): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("async button");
                resolve();
            }, 2000);
        });
    };

    return (
        <>
            <div>Buttons</div>

            <FilledButton onClick={click} color="secondary">
                button
            </FilledButton>

            <AsyncFilledButton onClick={asyncClick} color="secondary">
                async button
            </AsyncFilledButton>
        </>
    );
};

const InputExamples = () => {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div>Inputs</div>

            <Input
                value={value}
                setValue={setValue}
                placeholder="Text"
                color="secondary"
            />

            <Input
                type="password"
                value={password}
                setValue={setPassword}
                placeholder="Password"
                color="secondary"
            />

            <Input
                type="email"
                value={email}
                setValue={setEmail}
                placeholder="Email"
                color="secondary"
            />
        </>
    );
};

const SearchExample = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <div>Searches</div>

            <Search
                value={value}
                setValue={setValue}
                placeholder="Search"
                color="secondary"
            />
        </>
    );
};

const SelectExample = () => {
    return (
        <>
            <div>Selects</div>

            <Select options={{ color: "secondary" }}>
                <div>One</div>
                <div>Two</div>
            </Select>
        </>
    );
};

const ToggleExample = () => {
    const [value, setValue] = useState(false);

    return (
        <>
            <div>Toggles</div>

            <Toggle
                text="Hide"
                value={value}
                setValue={setValue}
                color="secondary"
            />
        </>
    );
};

const TabsExample = () => {
    return (
        <>
            <div>Tabs</div>

            <Tabs
                titles={["First", "Second", "Third"]}
                options={{ color: "secondary" }}
            >
                <div>Zero</div>
                <div>One</div>
                <div>Two</div>
            </Tabs>
        </>
    );
};

const Dev = () => {
    return (
        <div>
            <div className={styles.title}> Tested Page with components </div>

            <div className={styles.components}>
                <ButtonExamples />
                <InputExamples />
                <SearchExample />
                <SelectExample />
                <ToggleExample />
                <TabsExample />
            </div>
        </div>
    );
};

export default memo(Dev);
