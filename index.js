module.exports = {

    reloj: function() {
        setInterval(() => {

            var moment = require('moment');
            var reload = moment().format('MMMM Do YYYY, h:mm:ss a');
            // var reloj = document.getElementById('reloj');
            // reloj.innerHTML = reload
            console.log(reload);
        }, 1000);
    }
}