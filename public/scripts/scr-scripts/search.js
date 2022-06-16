var nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'scripts/data/nba.json'
});

var nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'scripts/data/nhl.json'
});

$('#multiple-datasets .typeahead').typeahead({
  highlight: true
}, {
  name: 'nba-teams',
  display: 'team',
  source: nbaTeams,
  templates: {
    header: '<h3 class="search-hd">Popular searches</h3>'
  }
}, {
  name: 'nhl-teams',
  display: 'team',
  source: nhlTeams,
  templates: {
    header: '<h3 class="search-hd MT30">Recent searches</h3>',
    empty: [
      '<div class="tt-dataset can-do">',
      '<div class="sry-tag">',
      'Sorry! We couldnot find ‘Lona’ in our website<br>Did you mean <strong>Loan?</strong>',
      '</div>',
      '<p>Here is what you can do :</p>',
      '<ul class="with-circle">',
      '<li>Try checking the spelling and search</li>',
      '<li>Search from below suggestions instead</li>',
      '<li>Widen your search &amp; try a more generic keyword</li>',
      '</ul></div>',
      '<div class="tt-dataset">',
      '<h3 class="search-hd MT20">Suggested</h3>',
      '<div class="tt-suggestion tt-selectable"><a href="" class="link">Apply Now</a><span class="tag">Product</span>All Loans</div>',
      '<div class="tt-suggestion tt-selectable"><a href="" class="link">Apply Now</a><span class="tag">Product</span>Personal Loan</div>',
      '<div class="tt-suggestion tt-selectable"><a href="" class="link">Apply Now</a><span class="tag">Product</span>Business Loan</div>',
      '<div class="tt-suggestion tt-selectable"><a href="" class="link">Apply Now</a><span class="tag">Product</span>Home Loan</div>',
      '</div>'
    ].join('\n')
  }
});

$(document).ready(function () {
  $('.search').on('click', function () {
    $('.search-bx').fadeIn();
    $('body').append('<div class="overlay"></div>');
    $('.overlay').fadeIn();
    $('body').addClass('overflow');
  })

  $('.search-bx .cls-btn').on('click', function () {
    $('.search-bx').fadeOut(function () {
      $('.overlay').remove();
    });
    $('body').removeClass('overflow');
  })
  $(document).on("click", ".overlay", function () {
    $('.search-bx').fadeOut(function () {
      $('.overlay').remove();
    });
    $('body').removeClass('overflow');
  })
});
$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $('.search-bx').fadeOut(function () {
      $('.overlay').remove();
    });
    $('body').removeClass('overflow');
  }
});
