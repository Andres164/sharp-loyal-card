export function disableFormFields(form) {
  for (const element of form.elements) {
    element.disabled = true;
  }
}

export async function clearFormFields(form) { 
  for (const element of form.elements) {
    if(element.type !== 'button' && element.type !== 'submit')
      element.value = "";
  }
}