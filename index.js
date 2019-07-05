$(function(){
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
    let newItem = $(this).find('input[id="shopping-list-entry"]').val();
    $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
               <span class="button-label">delete</span>
             </button>
            </div>
          </li>`);

  })


  $('ul').on('click', 'button.shopping-item-toggle', function(event){
    
    if($(this).closest('li').find('.shopping-item').hasClass('shopping-item__checked')){
      $(this).closest('li').find('.shopping-item').removeClass('shopping-item__checked');
    }
      //this seems like a complicated way of doing it... any advice? 
      else $(this).closest('li').find('.shopping-item').addClass('shopping-item__checked');

  })
  
  $('ul').on('click', 'button.shopping-item-delete', function(event){
    $(this).closest('li').detach();
  })
})