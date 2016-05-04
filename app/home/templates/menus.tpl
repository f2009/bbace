<%
for(var i = 0, len = menus.length; i < len; i++){
    var menu = menus[i];
    var hasChild = menu.items && menu.items.length;
    if(!menu.rsId) {
        console.error('菜单没有配置资源ID', menu.name);
    }

    if(!Ctx.avail(menu.rsId)) {
        console.log('顶级菜单没有权限', menu.name);
        continue;
    }
%>
<li class="<%=menu.className? menu.className:''%>">
    <!-- start level 1 item content -->
    <a href="<%= menu.url||'javascript:void(0);'%>" class="<%= hasChild? 'dropdown-toggle':''%>"
        <% _.each(menu.props, function(v, k){ %>
            data-<%=k%>="<%=v%>"
        <% }); %>
        >
        <i class="menu-icon fa <%= menu.iconCls||'fa-caret-right'%>"></i>
        <span class="menu-text"> <%= menu.name||''%> </span>
        <%if (hasChild) {%>
        <b class="arrow fa fa-angle-down"></b>
        <%}%>
    </a>

    <b class="arrow"></b>
    <!-- end level 1 item content -->

    <!-- start level 2 item content -->
    <%if (hasChild) {%>
    <ul class="submenu">
        <%= menusFn({menusFn: menusFn, menus: menu.items})%>
    </ul>
    <%}%>
    <!-- end level 2 item content -->
</li><!-- end of frist level item-->
<% } %>
