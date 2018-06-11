var studentManage = new Vue({
    el:'#studentManage',
    data:{
        course_member:[
     
        ],
        course_member_num:0
    }
});
//上面的vue用于前端测试

//需要user_id
var user_id = localStorage.getItem("user_id");
//需要course_id
var course_id = localStorage.getItem("course_id");

function addEvents() {
    // 欢迎信息显示
    $("#welcomeInfo").text(localStorage.getItem("username") + '，欢迎您！') ;

    //退出登录
    $("#logout").click(function() {
        window.location = '/user/login';
    });
    //管理员手动添加课程学生的页面
    $("#addCourseStudent").click(function() {
        window.location = '/user/'+user_id+'/course/'+course_id+'/add_course_member';
    });
    // 添加全级学生
    $("#addAllStudentButton").click(function() {
        window.location = '/add_student';
    });
    // 删除某个学生数据
    $(".delete_course_student").click(function() {
        console.log($(this).parent().prev().prev());
        var studient_id = $(this).parent().prev().prev().text();
        var delete_url = '/api/course/'+course_id+'/course_member/'+studient_id;
        axios.delete(delete_url)
        .then(function(response) {
            console.log(response.status);
            alert('删除学生数据成功');
        })
        .catch(function(error) {
            console.log(error.response);
            alert('删除学生失败');
        });
    });
}

$(document).ready(addEvents);