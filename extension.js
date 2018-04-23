// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "wrap-with-template-string" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.wrap', () => {
        // The code you place here will be executed every time your command is executed

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var inputBoxOptions = {
            placeHolder: "example: console.log($$$)",
            prompt: "your selections will replace $$$."
        }

        vscode.window.showInputBox(inputBoxOptions).then(text => {

            if (!text) {
                vscode.window.showErrorMessage("No template supplied.");
                return;
            }

            if (text.indexOf("$$$") != -1) {
                let selections = editor.selections;


                editor.edit(builder => {
                    for (const selection of selections) {
                        const originalText = editor.document.getText(selection);
                        const replacedText = text.replace('$$$', originalText);
                        builder.replace(selection, replacedText);
                    }

                    // Display a message box to the user
                    vscode.window.showInformationMessage('Wrapped: ' + selections.length + 1);
                });
            }
            else
            {
                vscode.window.showErrorMessage("You must include $$$ in your template.");
            }
        });

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;