$(document).ready(function() {
	function initializeDragger() {
		$('.bg_selector').resizable({
			handles: 'n, e, s, w',
			resize: function() {
				// setBgCss();
			}
		}, {
			containment: 'parent'
		});
		$('.bg_selector').draggable({
			drag: function() {
				// setBgCss();
			}
		}, {
			containment: 'parent'
		});
	}

	function calculateRes() {
		wWidth = window.innerWidth;
		wHeight = window.innerHeight;
		$(".heightSetter").height($(".dummy").height());
		document.getElementById("resolution").innerHTML = " W : " + wWidth + " x " + " H : " + wHeight;
	}
	window.onresize = function() {
		calculateRes();
	};

	function registerAction() {
		$(".tglbtn").unbind('click').bind('click', function() {
			$("body").toggleClass('opacityOn');
		});

		$('body').on('keydown', handleKeys);
	}

	function handleKeys(e) {
		var position,
			draggable = $('.bg_selector'),
			container = $('.imgContainer'),
			distance = 1;

		if (!e.shiftKey) {
			position = draggable.position();
			switch (e.keyCode) {
				case 37:
					position.left -= distance;
					break;
				case 38:
					position.top -= distance;
					break;
				case 39:
					position.left += distance;
					break;
				case 40:
					position.top += distance;
					break;
				default:
					return true;
			}
			if (position.left >= 0 && position.top >= 0) {
				draggable.css(position);
			}
		} else if (e.shiftKey) {
			draggableContent = $('.bg_selector')[0];
			draggableWidth = draggable.width();
			draggableHeight = draggable.height();
			position = draggable.position();

			switch (e.keyCode) {
				case 37:
					draggableWidth -= distance;
					break;
				case 38:
					draggableHeight -= distance;
					break;
				case 39:
					draggableWidth += distance;
					break;
				case 40:
					draggableHeight += distance;
					break;
				default:
					return true;
			}

			if (position.left >= 0 && position.top >= 0) {
				$(draggableContent).height(draggableHeight);
				$(draggableContent).width(draggableWidth);
				draggable.css(position);
			}
		}
		e.preventDefault();
	}

	initializeDragger();
	calculateRes();
	registerAction();
});