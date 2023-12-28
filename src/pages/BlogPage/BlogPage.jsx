import React, { useEffect } from 'react';
import './BlogPage.css';
import { useParams } from 'react-router-dom';
import { blogsDatas } from '../../data/blogsData';

function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { idBlog } = useParams();
    console.log(idBlog)
    const blog = blogsDatas.find(prod => prod.id === idBlog);

    return (
        <div>
            <section className='BlogPage'>
                {blog ? (
                    <div key={blog.id} className="container-blog">
                        <img src={blog.image} alt={blog.title} />
                        <div className="title-blogs">
                            <h1>Blog : {blog.title}</h1>
                            <div className="line-break">
                            </div>
                        </div>
                        <div className='content-blog'>
                        <p >{blog.content}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et quas voluptatibus nihil rerum mollitia enim corporis illum tempore iste eos quod, quaerat maxime deserunt officia consequuntur ab aspernatur vitae? Quia amet cupiditate sunt ullam beatae quo, perferendis adipisci nobis, doloribus voluptatem omnis sint quis commodi necessitatibus rem illo ea cumque laboriosam! Totam esse rerum cupiditate velit a laborum at magnam quod reiciendis modi ab, maxime saepe, repellendus beatae optio facere molestiae soluta dolore quaerat nobis cum debitis nostrum eaque ducimus. Quibusdam tempora ea commodi obcaecati fugit iste maxime animi officia praesentium id asperiores, soluta, beatae fuga quidem? Perspiciatis commodi deserunt error, corrupti laudantium at id quis porro culpa facere dolorem itaque rem reprehenderit, aspernatur ipsam provident autem. Cum dolorum assumenda incidunt, id pariatur iste mollitia aliquam asperiores perspiciatis modi praesentium culpa minus vitae nulla tempora ipsa, nam, vero labore ipsam? Nesciunt magnam eaque non, ab error consectetur ratione minima architecto eius in obcaecati aliquam modi tempora. Nam dolor placeat, accusantium aliquid beatae fugiat et magni a. Dolores aperiam ab illum. At facere accusantium quam velit, quos rerum voluptates, illo, voluptatum odit accusamus similique officia culpa. Suscipit sint labore quia asperiores expedita ducimus exercitationem, culpa quasi cupiditate quis vitae, corrupti enim voluptates accusamus sapiente, iste assumenda veniam deleniti ipsa? Mollitia accusamus porro quisquam quas nesciunt dolorum tempora, cumque, voluptatem, iusto nobis reiciendis! Itaque voluptatum error quaerat enim hic facere at molestiae, consequatur corrupti accusantium expedita libero quis necessitatibus reprehenderit. Magnam architecto provident molestiae, debitis ut a deserunt repudiandae magni sed earum aspernatur rem enim! Mollitia voluptatibus quasi aut unde saepe ex voluptatem enim, quas, amet, facere adipisci placeat alias at nostrum blanditiis eligendi repellat natus ipsum ut? Voluptatibus non maiores, delectus ab ex facere placeat quos minus. Ut, id quibusdam fuga provident harum aut sint dolorem adipisci, voluptatibus cum delectus itaque in veritatis unde. Nesciunt cum assumenda voluptas? Et non modi expedita esse eos fugit rerum officiis beatae reprehenderit magnam. Beatae hic deserunt fuga ipsum quam dignissimos facilis? Eos iure suscipit nesciunt, nihil praesentium aspernatur mollitia dolore aut consequuntur, quisquam fuga ipsam cumque molestiae fugiat rerum numquam ad facilis atque est optio, culpa explicabo. Dolorum nulla magnam ad, rerum totam ex provident fuga eos culpa possimus consequuntur accusantium deleniti excepturi? Necessitatibus amet quia debitis distinctio, praesentium autem unde nisi soluta labore vel! Placeat quis vitae, esse accusantium neque quibusdam voluptatem obcaecati laborum. Pariatur cupiditate laudantium, nisi eligendi facilis modi quibusdam dolore earum rem repellendus fuga impedit, nulla iusto tempore dolor eaque libero eum doloremque sit. Sapiente repudiandae minima eveniet nobis, cum ab qui quam, cupiditate nihil quia ad, deserunt excepturi aliquid! Quidem molestiae ut repudiandae placeat harum est aut quae recusandae qui eum sit nesciunt minus cum consequatur id, quis consequuntur pariatur quaerat! Voluptatem vero tenetur maxime optio in temporibus sunt suscipit non, libero laudantium. Dolore dolor ab, eum voluptate tempore cupiditate expedita et laboriosam nobis delectus, enim, dolorum esse voluptatibus quos cum maiores asperiores accusantium minus? Sit, impedit harum. Dolores labore mollitia similique earum eligendi, maxime necessitatibus amet ipsa id molestias corrupti a quidem! Iusto, veniam modi libero beatae ipsa et doloribus ipsam dolor laboriosam quam consequatur culpa, nostrum ea voluptatum distinctio repudiandae quae veritatis repellat? Recusandae earum delectus quibusdam voluptatem aut eum illum asperiores architecto, expedita eligendi voluptatum, dicta est adipisci facilis iste? Nesciunt eum, neque autem quo ullam ea ad! Similique, dolore eos. Minima ratione at, consequuntur ea eius nesciunt impedit iste molestias quis, est unde cumque doloribus itaque voluptatibus consequatur sed, velit et commodi labore explicabo officiis dolores saepe! Magni ipsa, nesciunt ea temporibus incidunt optio. Voluptatum non error aut repellendus, iusto, ullam illo ex officiis vero dicta quas vel fugiat expedita delectus dolore quia quam ipsum reprehenderit sint asperiores a numquam. Reprehenderit nulla qui, distinctio esse temporibus deleniti unde repudiandae excepturi odit earum animi similique adipisci error quibusdam possimus, totam, eligendi omnis! Dolore quisquam labore itaque ab quae debitis. Autem, non nisi? Obcaecati, nam. In, nam itaque! Maxime magnam neque, doloremque animi, corporis dolor provident numquam reprehenderit assumenda quo deleniti nesciunt hic maiores commodi saepe impedit! Quae magni nam quam repudiandae, doloremque eius cumque adipisci laborum, tempora corporis fugit incidunt soluta odit natus maiores labore consequuntur fuga, culpa accusamus earum a expedita accusantium? Quos facere assumenda, maiores officiis eius inventore possimus minus, praesentium atque tempora sequi fuga? Autem, quis nisi! Corporis hic aliquam et sequi dolore suscipit mollitia tempore laboriosam voluptates voluptatem vitae asperiores reprehenderit, magni minus ad tenetur ipsum aperiam! Ex, nihil quidem voluptatum veritatis autem, iure officia minima cumque, error at tempore unde blanditiis officiis ab consequatur quam eum. Nemo modi rerum numquam ea a consequatur tempore ab nisi porro repellat, ullam corrupti fugit dicta, repellendus culpa illum magni quas natus. Deserunt, perspiciatis autem voluptatum repellat ipsum hic molestias excepturi dolores ut aut ipsam animi nulla exercitationem et officia temporibus earum modi error.</p>
                        </div>
                    </div>
                ) : (
                    <p className='notFoundStyle'>Blog post not found!</p>
                )}
            </section>
        </div>
    );
}

export default BlogPage;
