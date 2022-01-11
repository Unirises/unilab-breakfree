<div class="height d-none" id="the_bartender">

    <div class="c4_timer">
        <span id="c4_timer">25</span>
    </div>
    <div class="the_bartender_content_div the_bartender_bg1" id="c4_bgChange">
        <div id="c4_m" class="c4_margin">
            <div class="text-center inst_bartender">
                <p>
                    Rearrange the<br>
                    beer glasses to<br>
                    empty-full-<br>
                    empty-full-<br>
                    empty-full.<br>
                    But you can ONLY<br>
                    move ONEglass.
                </p>
            </div>
            <div class="d-flex flex-row justify-content-center shot_glass" style="height: 100%;">
                <div class="d-flex align-items-end">
                    <div class="p-3">
                        <input type="checkbox" class="empty_bottle" id="c6_e_s1" value="c6_e_s1" />
                        <label for="c6_e_s1" class="c6_l_c"><img src="img/the_bartender/c4_empty_glass.png" id="c4_e_s1" class="glass" alt=""></label>
                    </div>
                    <div class="p-3">
                        <input type="checkbox" class="empty_bottle" id="c6_e_s2" value="c6_e_s2" />
                        <label for="c6_e_s2" class="c6_l_c"><img src="img/the_bartender/c4_empty_glass.png" id="c4_e_s2" class="glass" alt=""></label>
                        <img src="img/the_bartender/c4_glass.png" id="glass_selected" class="glass position-absolute d-none" style="margin-top: -11%; margin-left:2.5%; transform:rotate(-100deg);" alt="">
                    </div>
                    <div class="p-3">
                        <input type="checkbox" class="empty_bottle" id="c6_e_s3" value="c6_e_s3" />
                        <label for="c6_e_s3" class="c6_l_c"><img src="img/the_bartender/c4_empty_glass.png" id="c4_e_s3" class="glass" alt=""></label>
                    </div>

                    <div class="p-3">
                        <input type="checkbox" class="bottle" id="c6_s1" value="c6_s1" />
                        <label for="c6_s1" class="c6_l_c"><img src="img/the_bartender/c4_glass.png" id="c4_s1" class="glass" alt=""></label>
                    </div>
                    <div class="p-3">
                        <input type="checkbox" class="bottle" id="c6_s2" value="c6_e_s2" />
                        <label for="c6_s2" class="c6_l_c"><img src="img/the_bartender/c4_glass.png" id="c4_s2" class="glass" alt=""></label>
                    </div>
                    <div class="p-3">
                        <input type="checkbox" class="bottle" id="c6_s3" value="c6_s3" />
                        <label for="c6_s3" class="c6_l_c"><img src="img/the_bartender/c4_glass.png" id="c4_s3" class="glass" alt=""></label>
                    </div>
                </div>
            </div>

        </div>

        <!--C4 Board-->

        <div class="h-100 d-none" id="c4_cheers">
            <div class="d-flex justify-content-center h-100 align-items-center">
                <div class="board text-center">
                    <div class="d-flex justify-content-center h-100 align-items-center">
                        <div class="m-5">
                            <label>
                                FREE BEER!!
                            </label>
                            <p>
                                Cheers
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--C4 Wrong Answer-->
        <div class="h-100 d-none" id="c4_wrong">
            <div class="position-absolute w-100 header_TB_M">
                <div class="text-center">
                    <label class="header_TB">the bartender</label>
                </div>
            </div>
            <div class="d-flex align-items-end h-100">
                <div class="col-4">
                    <div class="sign_board">
                        <h1 id="c4_result_h1">TIMES UP</h1>
                        <label>Come back later and try again</label>
                    </div>
                </div>
                <div class="col-8">
                    <img src="img/the_bartender/bouncer.png" style="width:50%;" alt="" srcset="">
                </div>
            </div>

        </div>

    </div>

    <button type="button" class="btn-circle btn position-absolute menu_icon4 d-none">
        <img src="img/menu_icon.png" style="width: 100%;" alt="">
    </button>

</div>