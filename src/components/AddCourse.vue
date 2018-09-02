<template>
  <div>
        <div class="row" id="cards">
            <div class="col-5">
                <div class="card">
                    <div class="card-header">הוספת קורס</div>
                    <div class="card-body">
                        <h5 class="card-title">הוספת קורס למערכת</h5>
                        <p class="card-text">.הוספת קורס למערכת ניהול מסדרים</p>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCourse">הוסף קורס</button>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="card">
                    <div class="card-header">הוספת חניך</div>
                    <div class="card-body">
                        <h5 class="card-title">הוספת חניך לקורס</h5>
                        <p class="card-text">.הוספת חניכים לקורס על מנת לנהל מסדר בצורה תקינה</p>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addStudent">הוסף חניך</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="addStudent">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">הוספת חניך</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <input type="text" class="form-control" placeholder="שם פרטי">
                                </div>
                                <div class="form-group col-md-4">
                                    <input type="text" class="form-control" placeholder="שם משפחה">
                                </div>
                                <div class="form-group col-md-4">
                                    <input type="text" class="form-control" placeholder="מס' חניך">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">סגור</button>
                        <button type="button" class="btn btn-primary">הוסף חניך</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="addCourse">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">הוספת קורס</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <input type="text" class="form-control" placeholder="שם הקורס">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">סגור</button>
                        <button type="button" class="btn btn-primary">הוסף קורס</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import Countdown from 'vuejs-countdown'

export default {
  components: { Countdown }
}
</script>

<style>
    img {
        margin-left: 400px;
    }
    #cards {
        margin-top: 20px;
        margin-left: 200px;
    }
</style>
