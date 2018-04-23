# wrap-with-template-string

Wrap selected text with a template string.

## How it works

It works just like emmet wrapping.  However, you must include the placeholder `$$$` where you want your original text to appear.

### Example

We will select each line (with multiple carets)

```
this
text
will
be
wrapped
```

then activate the extension: CMD+SHIFT+P -> Wrap Selections With Template String

Write your template string: e.g. console.log($$$);

Execute, and the result will be

```
console.log(this);
console.log(text);
console.log(will);
console.log(be);
console.log(wrapped);
```