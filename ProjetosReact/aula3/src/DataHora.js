
function DataHora() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var secunds = date.getSeconds();
    var day = date.getDay();

    return (
        <div>
            <h1>{hour} : {minutes} : {secunds} : {day}
            </h1>
        </div>
    );


}
export default DataHora;