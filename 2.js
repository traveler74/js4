
let scores = 0
let best_scores = 0
let fail = false

function f1() {
    if ($('#restart_button').css('visibility') === 'visible') {
        f3()
        return
    } else {
        if ($('#dino').classList !== 'jump') {
            $('#dino').addClass('jump')
        }
    setTimeout(function () {
        $('#dino').removeClass('jump')
        }, 700)
    }
}

function f2() {
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    let pterotop = $('#ptero').css('top')
    let pteroleft = $('#ptero').css('left')
    kaktusleft = Number(kaktusleft.slice(0,-2))
    dinotop = Number(dinotop.slice(0,-2))
    pterotop = Number(pterotop.slice(0,-2))
    pteroleft = Number(pteroleft.slice(0,-2))
    console.log(pteroleft - kaktusleft)

    if ((kaktusleft>=0) && (kaktusleft<=50) && (dinotop>=300) && (dinotop<=350) ||
        (pteroleft>=0) && (pteroleft<=50) && (dinotop>=250) && (dinotop<350)) {
        // alert('Fail')
        // location.reload()
        $('#game').css('animation-play-state', 'paused')
        $('#ptero').css('animation-play-state', 'paused')
        $('#kaktus').css('animation-play-state', 'paused')
        $('#jump').css('animation-play-state', 'paused')
        $('#restart_button').css('visibility', 'visible')
        fail = true
        if (scores > best_scores) {
            best_scores = scores;
            scores = 0
            $('#best').text('BEST: ' + best_scores)
        }
    }
}

function score_counter() {
    if (!fail) {
        scores += 1
        $('#score').text('SCORE: ' + scores)
    }
}

function f3() {
    $('#game').removeClass('gamebganim')
    $('#ptero').removeClass('pteroanim')
    $('#kaktus').removeClass('kaktusanim')
    $('#dino').removeClass('jump')
    setTimeout(function (){
        $('#game').addClass('gamebganim')
        $('#ptero').addClass('pteroanim')
        $('#kaktus').addClass('kaktusanim')
        // $('#dino').addClass('jump')
        $('#game').css('animation-play-state', 'running')
        $('#ptero').css('animation-play-state', 'running')
        $('#kaktus').css('animation-play-state', 'running')
        $('#jump').css('animation-play-state', 'running')
        $('#restart_button').css('visibility', 'hidden')
        fail = false
    },1)
}

$(document).keydown(f1)
setInterval(f2,10)
setInterval(score_counter,100)
// $('#restart_button').click(f3)