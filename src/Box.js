/** Box Component for rendering a box
 * -- props : height, width, backgroundColor from NewBoxForm
 *
 *
 * App --> BoxList --> Box
 */

function Box({height, width, backgroundColor}) {

  console.log("height=", height, "width=", width, "backgroundColor=", backgroundColor);
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: backgroundColor
  }
  return (
    <div style={style}>

    </div>
  )
}

export default Box;
