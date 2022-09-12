$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
  }

  function get_achievement(){
    let score = $("#sum_indicate").text();
    console.log(score)
    if (score >= 450) {
    return "とても優秀です";
    }else if (score >= 400){
    return "良い成績です" ;}
    else if (score >= 300){
    return "普通です";}
    else{
    return "頑張りましょう";
    };
  }
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
})



