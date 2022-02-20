import './footer.css';

export const Footer = () => {

    const fakeTags = ["Daily life", "Du học", "Thực phẩm", "Đồ uống", "Dọn dẹp", "Ca nhạc", "Nhật Bản"];
    return (
        <div className="footer">
            <div className="footer_first">
                <div className="footer_element">
                    <div className='label_element'>
                        <div className="link_element">
                            <a href="#">TAGS</a>
                        </div>
                        <div className="triangle_element"></div>
                    </div>
                    <div className="body_element">
                        {fakeTags.map((item, index) => (
                            <div className="tag_element" key={`tag-${index}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer_element facebook">
                    <div className='label_element'>
                        <div className="link_element">
                            <a href="#">FOLLOW ON FACEBOOK</a>
                        </div>
                        <div className="triangle_element"></div>
                    </div>
                    <div className="body_element">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FH%C6%B0%E1%BB%9Bng-D%C6%B0%C6%A1ng-107155427873903%2F&tabs&width=299&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=501559760896253" width="299" height="130" style={{border: "none" , overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div> 
                </div>
                <div className="footer_element contact">
                    <div className='label_element'>
                        <div className="link_element">
                            <a href="#">CONTACT</a>
                        </div>
                        <div className="triangle_element"></div>
                    </div>
                    <div className="body_element">
                        <p>Email: test@gmail.com</p>
                        <br/>
                        <p>Số điện thoại: +84 912 567 890</p>
                        <br/>
                        <p>Facebook: facebook.com/hihi</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2022 Blog
            </div>
        </div>
    );
};