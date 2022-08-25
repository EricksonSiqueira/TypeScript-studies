// this is a element or nulable
const inputNullable = document.getElementById('input2');

// this is a HTMLInputElement not nulable
const input = document.getElementById('input') as HTMLInputElement;
input.focus();

// breakes
// const body = document.getElementById('body') as number;

const body = document.getElementById('body') as unknown as number; /// works
