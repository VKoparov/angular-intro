To iterate over the elements of a current subject, use the .each() command.

cy.get('.connectors-each-ul>li')
    .each(function($el, index, $list){
        console.log($el, index, $list)
    })
