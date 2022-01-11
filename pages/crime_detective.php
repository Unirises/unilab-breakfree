<div class="height d-none" id="crime_detective">


    <div class="c1_timer">
        <span id="c1_timer">30</span>
    </div>


    <div class="content_div">
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-8">
                        <img src="img/c1_l_r1.png" style="width: 90%; margin-left:20%; margin-top:2%; cursor:pointer;" id="showHintBTN" alt="">
                    </div>
                    <div class="col-4">
                        <img src="img/c1_medal.png" class="d-none" id="medal" style="width: 70%; margin-left:1%; margin-top:10%;">
                    </div>
                </div>
                <div class="justify-content-center d-flex ml-5">
                  <img src="img/c1_excellent.png" class="d-none c1_result" id="resultIcon" alt="">
                  <h1 class="times_up c1_t_up d-none">TIMES UP!</h1>
                </div>
                <div class="row" id="t_j_b">
                    <div class="col-6 text-center l_p">
                        <img src="img/c1_todd.png" id="todd" alt="">
                    </div>
                    <div class="col-6 text-center l_p">
                        <img src="img/c1_john.png" id="john" alt=""><br>
                        <img src="img/c1_bill.png" id="bill" alt="">
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        <p class="r_c1">
                            <span> Case # 0023645</span><br>
                            Suspect: <span id="suspect">UNKNOWN</span><br>
                            Crime: OIL SMUGGLING
                        </p>
                    </div>
                    <div class="col-6">
                        <img src="img/unknown.png" id="u_select" style="width: 50%; margin-left:22%; margin-top:10%;" alt="">
                    </div>
                </div>
                <div class="c1_r_info">
                    <img src="img/c1_case_closed.png" class="position-absolute d-none c_c" id="case_closed" alt="">
                    <p>
                        A detective who was mere days aways from
                        cracking an international oil smuggling ring
                        has suddenly gone missing. While inspecting
                        his last-known location, officers find a
                        note: 710 57735 34 5508 7718. Currently
                        there are 3 suspects: Bill, John and Todd.
                        Can you break the detective’s code and find
                        the criminal’s name?
                    </p>
                    <div class="d-flex align-items-end flex-column">
                        <img src="img/c1_confidential.png" class="confidential" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn-circle btn position-absolute menu_icon1 d-none">
        <img src="img/menu_icon.png" style="width: 100%;" alt="">
    </button>

    <!-- Modal -->
    <div class="modal animate__animated  animate__rotateIn " id="HintModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="false" data-keyboard="false" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <img src="img/c1_l_r1_flip.png" style="width: 100%;" alt="">
                    <button class="c1_custom_btn position-absolute" id="BACMBTN">BACK</button>
                </div>
            </div>
        </div>
    </div>

</div>