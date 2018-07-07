export const styles = theme => ({
  	absoluteCenter: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50% -50%)'
    },
	centerAligned: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  	fullWidth: {
      width: '100%'
    },
  	leftAligned: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
  	rightAligned: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
  	relative: {
      position: 'relative'
    },
  	absolute: {
      position: 'absolute',
      top: 0,
      left: 0
	}
})