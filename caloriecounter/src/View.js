import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom'

const { pre, div, h1, button, form, label, input } = hh(h);

//this is for usage in form view func
function fieldSet(labelText, inputValue) {
  return div([
    label({className: 'db mb1'}, labelText),
    input({
      className: 'pa2 input-reset ba w-100 mb2',
      type: 'text',
      value: inputValue
    }),
  ])
}

function buttonSet(dispatch) {
  return div([
    button({className: 'f3 pv2 ph3 bg-blue white bn mr2 dim', type:'submit'}, 'save'),
    button({className: 'f3 pv2 ph3 bn bg-light-grey dim', type:'button'}, 'cancel'),
  ])
}


function formView(dispatch, model) {
  const { description, calories , showForm } = model
  if(showForm){
    return form({className: 'w-100 mv-2'},[
      fieldSet('meal', description),
      fieldSet('calories', calories || ''),
      buttonSet(dispatch),
    ])
  }
  return button({className: 'f3 pv2 ph3 bg-blue white bn'}, 'add meal')
}





//like jsx render to html born here
function view(dispatch,model) {
  return div({className: 'mw6 center'},[
    h1({className: 'f2 pv2 bb'}, 'calorie counter'),
    formView(dispatch,model),
    pre(JSON.stringify(model, null, 2))
  ])
}

export default view;