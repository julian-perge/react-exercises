/**
 * This file handles the math and style for your spiral.
 * It's ok if you don't understand everything here.
 */

function sumOf(n, fn) {
  return Array.from(Array(n).keys()).reduce(a => a + fn(n), 0);
}

function getSpiralStyle(n, baseSize = 100, baseAngle = (50 * Math.PI) / 180) {
  const ratio = Math.sqrt(Math.tan(baseAngle) ** 2 + 1) / 2;
  return {
    position: 'absolute',
    width: baseSize * ratio ** n,
    height: baseSize * ratio ** n,
    left: '60%',
    top: sumOf(n, i => baseSize * ratio ** i * Math.cos(i * baseAngle)),
    marginLeft: sumOf(n, i => -baseSize * ratio ** i * Math.sin(i * baseAngle)),
    transform: `rotate(${n * baseAngle}rad)`,
    transformOrigin: 'top left',
    backgroundColor: '#61dafb',
    textAlign: 'center',
    lineHeight: `${baseSize * ratio ** n}px`,
  };
}

export default getSpiralStyle;
