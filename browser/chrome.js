var browser = prompt('type here',);
switch (browser) {
    case 'edge' :
        alert( "you've got the Edge!" );
        break;
    case 'chrome':
    case 'firefox':
    case 'safari':
    case 'opera':
        alert('Okay we support these browsers too' );
        break;
    default:
        alert('We hope the this page looks ok!' );

}