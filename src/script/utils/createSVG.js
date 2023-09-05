export const createSVG = (color) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "28");
  svg.setAttribute("height", "28");
  svg.setAttribute("viewBox", "0 0 28 28");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "10");
  circle.setAttribute("cy", "10");
  circle.setAttribute("r", "9.5");
  circle.setAttribute("stroke", color);
  circle.setAttribute("fill", "none");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "18.3536");
  line.setAttribute("y1", "18.6464");
  line.setAttribute("x2", "27.3536");
  line.setAttribute("y2", "27.6464");
  line.setAttribute("stroke", color);

  svg.append(circle, line);

  return svg;
};