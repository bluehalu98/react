var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552061/schoolzoneChild/getRestSchoolzoneChild'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'LC%2Fa4MUUSMarxh%2FoaoafIE0D7FzZ%2BzjG9iWPcYY9BjgsbPXbDZzJ3LVsg7sJeZ44%2BduL6I2dNBl5akVJO7ZYrg%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('searchYearCd') + '=' + encodeURIComponent('2015'); /**/
queryParams += '&' + encodeURIComponent('siDo') + '=' + encodeURIComponent('11'); /**/
queryParams += '&' + encodeURIComponent('guGun') + '=' + encodeURIComponent('320'); /**/
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
