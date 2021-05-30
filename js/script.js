//event while link be clicked
$('.page-scroll').on('click', function(){
  
  //ambil isi href
  var tujuan = $(this).attr('href');
  //tangkap elemen ybs
  var elemenTujuan = $(tujuan);
  
  //pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top
  },700, 'easeInOutExpo');

});
