$(function()
	{
		var $input = $('#todoText');
		var $todoList = $('.todoList');
		

		/*make list */
		function addList(text)
		{
			var $li = $('<li>');
			var $text = $('<sapn class="text">').text(text);
			var $checkBox = $('<input type="checkbox">');
			var $remove = $('<button id="delet">delet</button>');

			$li.append($text,$checkBox,$remove);

			$todoList.append($li);

			/*addClass done or delet*/
			$checkBox.click(function()
				{
					if($(this).is(':checked'))
					{
						$text.addClass('done');
					}
					else
					{
						$text.removeClass('done')
					}
				});

			$remove.click(function()
			{
				$li.remove();
			});
		}
		
		/*add to list*/
		$("#add").click(function()
			{
				var text = $input.val();
				addList(text);
				$input.val('');
			});


	});