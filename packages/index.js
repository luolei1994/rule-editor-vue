import RuleEditor from "./rule-editor";
const RuleEditorComponent = {
    install: (app, options) => {
        app.component("RuleEditor", RuleEditor)
    }
}
export default RuleEditorComponent