export default function handleMouseMove(event) {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const xOffset = 16;
  const yOffset = 3;
  const mouseXpercentage = (event.clientX / width) * 100; //Math.round(event.pageX / width * 100);
  const mouseYpercentage = (event.clientY / height) * 75 + yOffset; //Math.round(event.pageY / height * 100);
  document.getElementsByTagName('body')[0].style =
    'background:' + 'url("resources/white_grain.png") '
    // + ' radial-gradient(at ' +
    // mouseXpercentage +
    // '% ' +
    // mouseYpercentage +
    // '%, #EE6350, #F9E3E0)'
    ;
    // Background mouse tracking commented out & replaced with white grain overlay
}
