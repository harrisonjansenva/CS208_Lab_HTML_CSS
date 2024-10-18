console.log('quotes.js successfully loaded!');

const div_list_of_programming_quotes = document.getElementById("id_div_list_of_programming_quotes");

async function handleButtonRetrieveProgrammingQuotes()
{
    console.log('handleButtonRetrieveProgrammingQuotes - START');

    //get value from the category dropdown
    let selected_category = document.getElementById("id_category_selection").value;
    console.log(`selected_category         = ${selected_category}`);

    // TODO: get value from the number of quotes dropdown
    let selected_number_of_quotes = -1

    await getAndDisplayAllQuotes(selected_category, selected_number_of_quotes);

    console.log('handleButtonRetrieveProgrammingQuotes - END');
}

async function getAndDisplayAllQuotes(category, count)
{
    console.log('getAndDisplayAllQuotes - START');

    // TODO: update the API URL to include the values of the category and count
    const API_URL = ``;

    div_list_of_programming_quotes.innerHTML = "Calling the API to get the list of quotes...";

    try
    {
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
