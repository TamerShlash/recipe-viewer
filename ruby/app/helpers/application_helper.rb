module ApplicationHelper
  def title_as(title) 
    content_for :page_title, title
  end
end
