import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './about.css';
import img from '../../img/about_me.jpg';

const About = () => {
    
    return (
        <div className="about_me">
            <div className="about_me_header">
                <div className="top_header">BLOG</div>
                <div className="line_middle"></div>
                <div className="bottom_header">The Blogger</div>
            </div>
            <div className="about_me_main">
                <div className="about_me_content">
                    <div className="content_body">
                        <div className="image_about_me">
                            <img src={img} alt="img_about_me" />
                        </div>
                        <div>
                            <div className="about_me_title">
                                About me
                            </div>
                            <p>
                                Chào tất cả mọi người mình tên là Nguyễn Nam A. Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình. Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui khi đọc blog của mình
                            </p>
                        </div>
                        <div>
                            <div className="about_blog_title">
                                About blog
                            </div>
                            <p>
                            Tuy đã dùng các phương tiện truyền thông như mạng xã hội được một thời gian, nhưng mình chưa bao giờ dùng blog. Cho đến một ngày đầu tháng 06, khi mình cảm thấy muốn viết về cuộc sống hàng ngày, mình quyết định tạo blog.
                            Blog này bao gồm nhiều bài viết với những chủ đề khác nhau như cuộc sống hàng ngày, chuyện du học, học ngoại ngữ, những bài viết liên quan đến lối sống tối giản (minimalism), nấu ăn hay đọc sách. Nói chung là cái gì mình cũng viết. Mình muốn được viết và được chia sẻ với mọi người về những gì mình đã và đang trải nghiệm, với mong muốn truyền một chút cảm hứng cho những ai tìm đọc blog của mình
                            </p>
                        </div>
                    </div>
                    <div className="content_footer">
                        <div className="footer_title">
                            Favorite quote: 
                        </div>
                        <div className="footer_main">
                            Stay focused, be present
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default About
