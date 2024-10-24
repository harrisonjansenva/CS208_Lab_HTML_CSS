console.log('quotes.js successfully loaded!');

const div_list_of_programming_quotes = document.getElementById("id_div_list_of_programming_quotes");

async function handleButtonRetrieveProgrammingQuotes()
{
    console.log('handleButtonRetrieveProgrammingQuotes - START');

    //get value from the category dropdown
    let selected_category = document.getElementById("id_category_selection").value;
    console.log(`selected_category         = ${selected_category}`);

    // TODO: get value from the number of quotes dropdown
    let selected_number_of_quotes = document.getElementById("id_number_of_quotes").value;

    await getAndDisplayAllQuotes(selected_category, selected_number_of_quotes);

    console.log('handleButtonRetrieveProgrammingQuotes - END');
}

function displayQuotes(listOfProgrammingQuotes) {
    console.log(`displayQuotes - START`)
    div_list_of_programming_quotes.innerHTML="";
    for (const quote of listOfProgrammingQuotes) {
        console.log({quote});
        div_list_of_programming_quotes.innerHTML+=`
        <li>${quote.body} - ${quote.authors}</li>`;

    }
     div_list_of_programming_quotes.innerHTML="<ul>" + div_list_of_programming_quotes.innerHTML + "</ul>";

}

async function getAndDisplayAllQuotes(category, count)
{
    console.log('getAndDisplayAllQuotes - START');

    // TODO: update the API URL to include the values of the category and count
    const API_URL = `https://cs208-programming-quotes-ff89e28d2421.herokuapp.com/api/quotes?category=${category}&count=${count}`;

    div_list_of_programming_quotes.innerHTML = "Calling the API to get the list of quotes...";

    try
    {
       let response = await fetch(API_URL);
       console.log(`response.status = ${response.status}`);
       console.log(`response.body = ${response.statusText}`);
       console.log(`response.ok = ${response.ok}`);

       if (response.ok)
       {
           div_list_of_programming_quotes.innerHTML = "Successfully retrieved quotes.";
           const listOfProgrammingQuotes = await response.json();      //if we don't put await it won't load in the correct format
           console.log(listOfProgrammingQuotes);
           displayQuotes(listOfProgrammingQuotes);
           // div_list_of_programming_quotes.innerHTML = response.body;

       }
       else
       {
           div_list_of_programming_quotes.innerHTML = "<p class='failure'>Error: the quotes could not be found.</p>";
       }

        // TODO: use the fetch API to call the API_URL

        // TODO: check if the response is OK and then process the JSON response and display the quotes in the div_list_of_programming_quotes.innerHTML

        // TODO: if the response is not OK, then display an error message in the div_list_of_programming_quotes.innerHTML
    }
    catch (error)
    {
        console.error(error);
        div_list_of_programming_quotes.innerHTML = '<p class="failure">ERROR: failed to connect to the API to fetch the quotes.</p>';
    }

    console.log('getAndDisplayAllQuotes - END');
}
